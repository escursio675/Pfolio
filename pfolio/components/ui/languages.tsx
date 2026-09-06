export default function Languages() {
  const languages = [
    { name: "English", level: "Native" },
    { name: "Hindi", level: "Fluent" },
    { name: "Assamese", level: "Native" },
    { name: "Japanese", level: "Beginner" },
  ];

  return (
    <div>
      <h3 className="text-md font-semibold mb-3">Languages</h3>

      <ul className="space-y-3 divide-y divide-[#cdd6f4]/10">
        {languages.map(({ name, level }) => (
          <li
            key={name}
            className="flex justify-between items-center pt-3 first:pt-0 group"
          >
            <span className="text-sm group-hover:text-[#689bec] transition-colors duration-150">
              {name}
            </span>
            <span className="text-sm text-[#c3c9d5]">{level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}