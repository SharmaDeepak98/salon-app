interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookModal: React.FC<BookModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className=" rounded-lg p-8 max-w-xl w-full mx-4 relative z-10 max-h-[90vh] bg-yellow-100">
        <div className="mb-4 text-center">
          <h1 className="text-4xl font-dancingScript font-[950]">
            Hey Beautiful !!
          </h1>
          <p className="text-lg mt-4">We are a "Text-Based-Salon",</p>
          <p className="text-lg mb-4">to book your appointment with us,</p>
          <h1 className="text-2xl my-4 "><span className="font-bold ">TEXT:</span> 613-749-2074</h1>
          <p className="text-sm ">Please Include your name, service requested,</p>
          <p className="text-sm  ">with your schedule availability.</p>
        </div>
        <div className="bottom-2 right-3 absolute "> 
        <button
          onClick={onClose}
          className=" mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800  "
        >
          Close
        </button>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
