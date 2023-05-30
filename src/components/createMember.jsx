import avatar from '../assets/avatarsTeam/avatar'

const MemberCard = (props) => {
  const {photo, name, job} = props

  return (
    <div className="text-center">
      <img className="rounded-full w-32 h-32 mx-auto shadow-xl" loading="lazy" src={avatar[photo]} alt={`Foto de "${name}"`} />
      <div className="mt-2 sm:mt-4">
        <h3 className="text-lg font-medium text-gray-800">{name}</h3>
        <p className="text-base text-gray-600">{job}</p>
      </div>
    </div>
  ) 
}

export default MemberCard

/*
Función: Componente encargado de crear una tarjeta de miembro (MemberCard).

Props:
  photo: Url de la foto de miembro.
  name: String de nombre de miembro.
  job: String de cargo ocupado del miembro.

*/
