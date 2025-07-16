// library
import { toast } from "react-toastify";

// helpers
import { updateBudget } from "../helpers";

export function shareBudget({ params }) {
  try {
    updateBudget({
      id: params.id,
      isShared: true,
    });
    toast.success("Budget shared successfully!");
  } catch (error) {
    throw new Error("Failed to share budget");
  }

  return null;
}
