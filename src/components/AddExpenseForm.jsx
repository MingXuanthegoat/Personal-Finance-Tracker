import React, { useEffect, useRef } from "react";

// library imports
import { PlusCircleIcon } from "@heroicons/react/24/solid";
// rrd imports
import { useFetcher } from "react-router-dom";

const AddExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state == "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();

      focusRef.current.focus();
    }
  }, [isSubmitting]);
  return (
    <div className="form-wrapper">
      <h2 className="h3">
        Add new{" "}
        <span className="accent">
          {budgets.length == 1 && `${budgets.map((budge) => budge.name)}`}
        </span>{" "}
        expense
      </h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="expense-inputs">
          <div className="grid-xs">
            <label htmlFor="newExpense">Expense Name</label>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              placeholder="e.g., Coffee"
              ref={focusRef}
              required></input>
          </div>

          <div className="grid-xs">
            <label htmlFor="newExpenseAmount">Amount</label>
            <input
              type="number"
              step={0.01}
              inputMode="decimal"
              name="newExpenseAmount"
              id="newExpenseAmount"
              placeholder="e.g., $3.50"
              required></input>
          </div>

          <div className="grid-xs">
            <label htmlFor="newExpenseBudget">Budget Category</label>
            <select name="newExpenseBudget" id="newExpenseBudget" required>
              {budgets
                .sort((a, b) => a.createdAt - b.createdAt)
                .map((budge) => {
                  return (
                    <option value={budge.id} key={budge.id}>
                      {budge.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <input type="hidden" name="_action" value="createExpense"></input>
        <div>
          <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
            {isSubmitting ? (
              <span>Submitting...</span>
            ) : (
              <>
                <span>Add Expense</span>
                <PlusCircleIcon width={20} />
              </>
            )}
          </button>
        </div>
      </fetcher.Form>
    </div>
  );
};

export default AddExpenseForm;
