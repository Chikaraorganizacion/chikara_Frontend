import FormPage from '../../components/Common/FormPage';
import bgAttendance from '../../assets/background/bg-attendance.webp';

const AttendanceForm = () => {
  return (
    <FormPage
      title="Registro de asistencia a eventos"
      iframeTitle="Formulario de asistencia a eventos"
      iframeSrc="https://docs.google.com/forms/d/e/1FAIpQLSfB8tnqpyMsD0iY_qYkbIEkFAEoyvL1miXUhTthhzCNt4TFXQ/viewform?embedded=true"
      bgImage={bgAttendance}
    />
  );
};

export default AttendanceForm;
