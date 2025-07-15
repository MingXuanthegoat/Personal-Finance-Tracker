// library
import { toast } from "react-toastify";
import { updateBudget } from "../helpers";

export function shareBudget({ params }) {
  try {
    updateBudget({
      id: params.id,
      isShared: true,
    });
    toast.success("Budget shared successfully!");
  } catch (e) {
    throw new Error("There was a problem sharing your budget.");
  }

  return null; // No redirect needed, just update the budget
}
