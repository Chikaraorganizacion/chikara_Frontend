const Group = ({ data, Component }) => {
  return (
    data.map((props) => (
      <Component {...props} />
    ))
  )
}

export default Group

/*
Función: Componente encargado de crear un grupo de componentes, apartir de un componete base y un array de objetos.

Props:
  data: Array de objetos que contiene la información de los componentes a mostrar..
  Component: Componente base que se multiplicara en función del númerode objetos del array.
*/