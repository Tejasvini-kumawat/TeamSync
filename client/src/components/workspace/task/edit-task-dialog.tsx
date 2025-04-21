import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import EditTaskForm from "./edit-task-form";
import { TaskType } from "@/types/api.type";

interface EditTaskDialogProps {
  task: TaskType;
}

const EditTaskDialog = (props: EditTaskDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Dialog modal={true} open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg max-h-auto my-5 border-0">
          <EditTaskForm task={props.task} onClose={onClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditTaskDialog; 