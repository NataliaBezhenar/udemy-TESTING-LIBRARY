import Alert from "react-bootstrap/Alert";

// eslint-disable-next-line react/prop-types
export default function AlertBanner({ message, variant }) {
  const alertMessage =
    message || "An unexpected error occurred. Please try again later";
  const defaultVariant = variant || "danger";

  return (
    <Alert variant={defaultVariant} style={{ backgroundColor: "red" }}>
      {alertMessage}
    </Alert>
  );
}
