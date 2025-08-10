/**
 * **Reusable Component**
 * @param state:boolen
 * @returns Error message component
 */
export default function FormErrorMessage({ state }: { state: boolean }) {
  return (
    <>
      {!state && (
        <p className="text-red-500 font-semibold text-md mb-5">
          Enter a valid email!
        </p>
      )}
    </>
  );
}
