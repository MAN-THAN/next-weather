export default function Item({title, data}) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white flex-auto">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-slate-400">{title}</div>
        <p class="text-gray-700 text-base">
         {data}
        </p>
      </div>
    </div>
  );
}
