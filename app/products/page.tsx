import {Package} from "lucide-react";

export default function products() {
  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-row p-4 border-2 border-amber-600">
        <Package /> <span>Nome do produto</span>
      </div>
    </div>
  )
}
