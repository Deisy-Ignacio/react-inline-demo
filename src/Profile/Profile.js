import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Editable from "./../Editable";
import InputText from "../FormElements/InputText";

import { schema, resolver } from "./Profile.schema";
import { useEffect } from "react";

const dataFromAPI = { firstname: "José Lugo 🤠", age: 28 };

function Page({ children }) {
  return (
    <div className="h-screen bg-gray-200 p-8 overflow-auto">{children}</div>
  );
}

function Card({ children }) {
  return <div className="bg-white p-10 rounded-lg mb-12">{children}</div>;
}

export default function Profile() {
  const methods = useForm({ resolver: yupResolver(resolver) });

  const fields = methods.watch();

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    Object.keys(dataFromAPI).forEach((key) => {
      methods.setValue(key, dataFromAPI[key], {});
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page>
      <Card>
        <pre>
          <code>api_response: {JSON.stringify(dataFromAPI, null, "	")}</code>
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
              text={fields.firstname}
              placeholder={schema.firstname.placeholder}
              customClass={"text-4xl mb-4"}
              customInput={
                <InputText
                  {...schema.firstname}
                  customClass={
                    "text-4xl mb-4 border-blue-300 bg-gray-200 focus:bg-blue-400 focus:shadow-outline"
                  }
                />
              }
            />
            {/* Age field */}
            <Editable
              text={fields.age}
              placeholder={schema.age.placeholder}
              customClass={"text-4xl mb-4"}
              customInput={
                <InputText
                  {...schema.age}
                  customClass={
                    "text-4xl mb-4 border-blue-300 bg-gray-200 focus:bg-blue-400 focus:shadow-outline"
                  }
                />
              }
            />

            <button type="submit">Submit</button>
          </form>
        </FormProvider>
      </Card>
    </Page>
  );
}
