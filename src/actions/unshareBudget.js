// library
import { toast } from "react-toastify";

// helpers
import { deleteItem, getAllMatchingItems, updateBudget } from "../helpers";

export function unshareBudget({ params }) {
  try {
    updateBudget({
      id: params.id,
      isShared: false,
    });

    const associatedUsers = getAllMatchingItems({
      category: "users",
      key: "budgetId",
      value: params.id,
    });

    associatedUsers.forEach((user) => {
      deleteItem({
        key: "users",
        id: user.id,
      });
    });

    toast.success("Undo shared successfully!");
  } catch (error) {
    throw new Error("Failed to undo share");
  }

  return null;
}
