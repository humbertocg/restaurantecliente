import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useContext } from "react";
import { FirebaseContext } from "../../firebase";
import { collection, addDoc /*getDocs*/ } from "firebase/firestore";

type iniValuesForm = {
  nombre: string;
  precio: string;
  categoria: string;
  imagen: string;
  description: string;
};

const NuevoPlatillo = () => {
  const firebase = useContext(FirebaseContext);

  const initvalues: iniValuesForm = {
    nombre: "",
    precio: "",
    categoria: "",
    imagen: "",
    description: "",
  };
  const formik = useFormik({
    initialValues: { ...initvalues },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(3, "Los platillos deben tener al menos 3 caracteres")
        .required("El nombre es ser obligatorio"),
      precio: Yup.number()
        .min(1, "Debes agregar un numero")
        .required("El precio ser obligatorio"),
      categoria: Yup.string().required("La categoria es obligatoria"),
      description: Yup.string()
        .min(10, "La description debe ser mas larga")
        .required("El nombre debe ser obligatorio"),
    }),
    onSubmit: async (datos) => {
      try {
        const addPlatilo = await addDoc(collection(firebase.db, "Platillos"), {
          ...datos,
        });
        console.log("Document written with ID: ", addPlatilo.id);
      } catch (ex) {
        console.log(ex);
      }
    },
  });
  return (
    <>
      <h1 className="text-3xl font-light mb-4">Agregar Platillo</h1>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                id="nombre"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Nombre platillo"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.nombre && formik.errors.nombre ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.nombre}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="precio"
              >
                Precio
              </label>
              <input
                id="precio"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="$20"
                min={0}
                value={formik.values.precio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.precio && formik.errors.precio ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.precio}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="categoria"
              >
                Categoria
              </label>
              <select
                id="categoria"
                name="categoria"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formik.values.categoria}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value={""}>-- Seleccione --</option>
                <option value={"desayuno"}>Desayuno</option>
                <option value={"comida"}>Comida</option>
                <option value={"cena"}>Cena</option>
                <option value={"bebida"}>Bebida</option>
                <option value={"postre"}>Postre</option>
                <option value={"ensalada"}>Ensalada</option>
              </select>
            </div>
            {formik.touched.categoria && formik.errors.categoria ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.categoria}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="imagen"
              >
                Seleccione una imagen
              </label>
              <input
                id="imagen"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                value={formik.values.imagen}
                onChange={formik.handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="descripcion"
              >
                Descripcion
              </label>
              <textarea
                id="description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                placeholder="Descripcion del platillo"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            {formik.touched.description && formik.errors.description ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.description}</p>
              </div>
            ) : null}

            <input
              type="submit"
              value={"Agregar platillo"}
              className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default NuevoPlatillo;
