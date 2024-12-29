import Button from "./Button";

interface ServicesProps {
  serviceName: string;
  description: string;
  price: string;
  type?: string;
}

const ServicesDetail = ({ serviceName, description, price  }: ServicesProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold tracking-wider">{serviceName}</h1>
        <div>
          <Button description="Book Now!!" />
        </div>
      </div>
      <div className="space-y-2 flex flex-col w-3/4">
        <p className="text-lg text-gray-700">{description}</p>
        <p className="text-lg font-bold">${price}</p>
      </div>
      <hr className="border-t-2 border-yellow-200 w-16" />
    </div>
  );
};

export default ServicesDetail;
