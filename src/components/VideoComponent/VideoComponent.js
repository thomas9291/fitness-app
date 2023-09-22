export default function VideoComponent() {
  return (
    <video controls width={450} height={450}>
      <source src="https://fitness-app-presentation.s3.eu-central-1.amazonaws.com/fitness-app-presantation.mp4" />
    </video>
  );
}
