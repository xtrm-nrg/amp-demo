import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AllocationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="PEP Package" source="pepPackage" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VIN" source="vin" />
      </SimpleShowLayout>
    </Show>
  );
};
