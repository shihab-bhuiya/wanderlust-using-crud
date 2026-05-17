"use client";
import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import { TbTrash } from "react-icons/tb";

export function DeleteAlert({destinations}) {

    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/destination/${destinations._id}`, { 
            method:"DELETE",
            headers:{
                "content-type": "application/json",
            },
        });
        redirect("/destinations");
      

    };
  return (
    <AlertDialog>
      <Button className="text-red-500"variant="outline"><TbTrash/> Delete </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete destination permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinations.destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete 
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}  