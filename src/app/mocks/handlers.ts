import { http, HttpResponse } from "msw";
import bcrypt from "bcryptjs";

let users: any[] = [];
let meals: any[] = [
  {
    id: 1,
    name: "Chicken Pasta",
    calories: 620,
    protein: 40,
    carbs: 60,
    fat: 20,
    aiNotes: "Try tomato-based sauce for fewer calories",
    comments: [{ id: 1, text: "Looks delicious!" }],
    userId: 1,
  },
];

export const handlers = [
  // ----------------------
  // REGISTER
  // ----------------------
  http.post("/api/register", async ({ request }) => {
    type RegisterBody = { name: string; email: string; password: string };
    const body = (await request.json()) as RegisterBody;
    const { name, email, password } = body;

    if (users.find((u) => u.email === email)) {
      return HttpResponse.json(
        { message: "Email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password: hashedPassword,
    };

    users.push(newUser);

    return HttpResponse.json(
      { id: newUser.id, name: newUser.name, email: newUser.email },
      { status: 201 }
    );
  }),

  // ----------------------
  // LOGIN
  // ----------------------
  http.post("/api/login", async ({ request }) => {
    type LoginBody = { email: string; password: string };
    const body = (await request.json()) as LoginBody;
    const { email, password } = body;
    const user = users.find((u) => u.email === email);

    if (!user) {
      return HttpResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return HttpResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = "fake-jwt-token";

    return HttpResponse.json(
      {
        token,
        user: { id: user.id, name: user.name, email: user.email },
      },
      { status: 200 }
    );
  }),

  // ----------------------
  // GET MEALS
  // ----------------------
  http.get("/api/meals", () => {
    return HttpResponse.json(meals, { status: 200 });
  }),

  // ----------------------
  // ADD MEAL
  // ----------------------
  http.post("/api/meals", async ({ request }) => {
    const data = await request.json();

    const newMeal = {
      id: meals.length + 1,
      ...(typeof data === "object" && data !== null ? data : {}),
      comments: [],
    };


    meals.push(newMeal);

    return HttpResponse.json(newMeal, { status: 201 });
  }),

  // ----------------------
  // ADD COMMENT
  // ----------------------
  http.post("/api/comments", async ({ request }) => {
    const data = await request.json();
    const mealId = (typeof data === "object" && data !== null && "mealId" in data) ? data.mealId : undefined;
    const text = (typeof data === "object" && data !== null && "text" in data) ? data.text : undefined;

    const meal = meals.find((m) => m.id === mealId);

    if (!meal) {
      return HttpResponse.json(
        { message: "Meal not found" },
        { status: 404 }
      );
    }

    const newComment = {
      id: meal.comments.length + 1,
      text,
    };

    meal.comments.push(newComment);

    return HttpResponse.json(newComment, { status: 201 });
  }),

  // ----------------------
  // AI SUGGESTIONS
  // ----------------------
  http.post("/api/ai-suggest", async ({ request }) => {
    const data = await request.json();
    const description =
      typeof data === "object" && data !== null && "description" in data
        ? data.description
        : undefined;

    const aiResponse = `AI suggestion for your meal: ${description ?? ""}`;

    return HttpResponse.json(
      { suggestion: aiResponse },
      { status: 200 }
    );
  }),
];
