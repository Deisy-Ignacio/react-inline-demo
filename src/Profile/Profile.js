import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Editable from "./../Editable";
import InputText from "../FormElements/InputText";

import { schema, resolver } from "./Profile.schema";

function Page({ children }) {
  return (
    <div className="h-screen bg-gray-200 p-8 overflow-auto">{children}</div>
  );
}

function Card({ children }) {
  return <div className="bg-white p-10 rounded-lg mb-12">{children}</div>;
}

function Profile({ data: serverData }) {
  const [data, setData] = useState(serverData);

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(resolver),
    defaultValues: data,
  });

  const fields = methods.watch();

  const onSubmit = (data) => console.log(data);

  const saveField = (fieldToUpdate) =>
    setData((current) => ({
      ...current,
      [fieldToUpdate]: fields[fieldToUpdate],
    }));

  const resetField = (fieldToReset) =>
    methods.setValue(fieldToReset, data[fieldToReset]);

  return (
    <>
      <Card>
        <pre>
          <code>reduxStore: {JSON.stringify(data, null, "	")}</code>
        </pre>
      </Card>

      <Card>
        <pre>
          <code>schema_fields: {JSON.stringify(fields, null, "	")}</code>
        </pre>
      </Card>
      <Card>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {/* First name field */}
            <Editable
              {...schema.firstname}
              text={fields.firstname}
              saveField={saveField}
              resetField={resetField}
              customClass={"text-4xl mb-4"}
              customInput={
                <InputText
                  {...schema.firstname}
                  customClass={
                    "text-4xl mb-4 bg-gray-200 border-2 border-gray-200 outline-none inline"
                  }
                />
              }
            />

            {/* First name field */}
            <Editable
              {...schema.bio}
              text={fields.bio}
              saveField={saveField}
              resetField={resetField}
              customClass={"text-4xl mb-4"}
              customInput={
                <InputText
                  {...schema.bio}
                  customClass={
                    "text-4xl mb-4 bg-gray-200 border-2 border-gray-200 outline-none inline"
                  }
                />
              }
            />

            {/* Age field */}
            <Editable
              {...schema.age}
              text={fields.age}
              saveField={saveField}
              resetField={resetField}
              customClass={"text-4xl mb-4"}
              customInput={
                <InputText
                  {...schema.age}
                  customClass={
                    "text-4xl mb-4 bg-gray-200 border-2 border-gray-200 outline-none inline"
                  }
                />
              }
            />
          </form>
        </FormProvider>
      </Card>
    </>
  );
}

export default function ProfilePage() {
  const dataFromRedux = {
    firstname: "José Lugo 🤠",
    age: "28",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  };
  return (
    <Page>
      <Profile data={dataFromRedux} />
    </Page>
  );
}
