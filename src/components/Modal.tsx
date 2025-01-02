import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    name: string;
    modalContent: {
      detailedInfo: string;
      process: string[];
      aftercare: string[];
      recommendations: string;
    };
  } | null;
}

const Modal = ({ isOpen, onClose, service }: ModalProps) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-lg p-8 max-w-3xl w-full mx-4 relative z-10 max-h-[90vh] overflow-y-auto"
          >
            <h2 className="text-2xl font-bold mb-6">{service.name}</h2>
            
            {/* Detailed Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">About the Service</h3>
                <p className="text-gray-700">{service.modalContent.detailedInfo}</p>
              </div>

              {/* Process Steps */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Process</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  {service.modalContent.process.map((step, index) => (
                    <li key={index} className="text-gray-700">{step}</li>
                  ))}
                </ol>
              </div>

              {/* Aftercare Instructions */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Aftercare</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {service.modalContent.aftercare.map((instruction, index) => (
                    <li key={index} className="text-gray-700">{instruction}</li>
                  ))}
                </ul>
              </div>

              {/* Recommendations */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Recommendations</h3>
                <p className="text-gray-700">{service.modalContent.recommendations}</p>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <Button description="Close" onClick={onClose} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;