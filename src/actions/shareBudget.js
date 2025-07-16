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
  } catch (error) {
    toast.error("Failed to share budget");
  }

  return null;
}
