import FormPage from '../../components/Common/FormPage.jsx'
import bgForm from '../../assets/background/bg-form.webp'

const JoinFormPage = () => {
  return (
    <FormPage
      title="Formulario de inscripción"
      iframeTitle="Formulario de inscripción"
      iframeSrc="https://docs.google.com/forms/d/e/1FAIpQLSf61XNbHHbQU0OwGa3PU5tfgri7Lh0A1-CuZeO7AzaPgyMNsQ/viewform?embedded=true"
      bgImage={bgForm}
    />
  );
};

export default JoinFormPage;
