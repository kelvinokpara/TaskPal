import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import TodoList from "../Components/TodoList";

function TodoHomePage() {
  return (
    <div>
      <Nav />
      <main>
        <TodoList />
      </main>
      <Footer />
    </div>
  );
}

export default TodoHomePage;
