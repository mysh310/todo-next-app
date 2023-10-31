import { NextResponse } from "next/server";

let todos = [
  {
    id: 1,
    name: "get groceries",
  },
  {
    id: 2,
    name: "do homework",
  },
  {
    id: 3,
    name: "go to the gym",
  },
];

export async function GET() {
  return NextResponse.json({ todos });
}

export async function DELETE(request) {
  const data = await request.json();

  todos = todos.filter((i) => i.id !== data.id);
  console.log(todos);

  return NextResponse.json({ todos });
}

export async function POST(request) {
  const data = await request.json();

  todos.push({ id: todos.length + 1, name: data.name });

  return NextResponse.json({ todos });
}
