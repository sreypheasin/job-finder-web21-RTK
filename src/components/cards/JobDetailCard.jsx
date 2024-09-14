import { Card } from "flowbite-react";

export function JobDetailCard({ thumbnail, title, description }) {
  return (
    <Card className="max-w-sm" horizontal>
      <div>
        <img
          src={
            thumbnail ||
            "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          }
          alt={title}
        />
      </div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title || "No Job Title"}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description || "No Job Description"}
      </p>
    </Card>
  );
}
