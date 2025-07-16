// library
import { toast } from "react-toastify";
import { updateBudget } from "../helpers";

export function unshareBudget({ params }) {
  try {
    updateBudget({
      id: params.id,
      isShared: false,
    });
    toast.success("Undo shared successfully!");
  } catch (error) {
    toast.error("Failed to undo share");
  }

  return null;
}
