import type { Dog } from "@/data/dogs";

export function DogProfile({ dog }: { dog: Dog }) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Image placeholder */}
        <div className="flex h-72 w-full shrink-0 items-center justify-center rounded-xl bg-cream-dark lg:h-80 lg:w-80">
          <span className="text-sm text-text-light">Photo coming soon</span>
        </div>

        <div className="flex-1">
          {/* Name and role */}
          <div className="flex items-center gap-3">
            <h2 className="font-heading text-3xl font-bold">{dog.name}</h2>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
                dog.role === "Dam" ? "bg-primary" : "bg-accent"
              }`}
            >
              {dog.role}
            </span>
          </div>
          <p className="mt-1 text-text-light">{dog.breed}</p>

          {/* Stats grid */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-text-light">
                Date of Birth
              </p>
              <p className="mt-1 font-medium text-text-dark">{dog.dateOfBirth}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-text-light">
                Weight
              </p>
              <p className="mt-1 font-medium text-text-dark">{dog.weight}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-text-light">
                Color
              </p>
              <p className="mt-1 font-medium text-text-dark">{dog.color}</p>
            </div>
          </div>

          {/* Temperament tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {dog.temperament.map((trait) => (
              <span
                key={trait}
                className="rounded-full bg-accent-light/30 px-3 py-1 text-sm font-medium text-accent"
              >
                {trait}
              </span>
            ))}
          </div>

          {/* Bio */}
          <p className="mt-6 leading-relaxed text-text-body">{dog.bio}</p>
        </div>
      </div>

      {/* Health testing table */}
      <div className="mt-8">
        <h3 className="font-heading text-xl font-bold">Health Testing</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-cream-dark">
                <th className="pb-3 pr-4 font-semibold text-text-dark">Test</th>
                <th className="pb-3 pr-4 font-semibold text-text-dark">Result</th>
                <th className="pb-3 font-semibold text-text-dark">Date</th>
              </tr>
            </thead>
            <tbody>
              {dog.healthTests.map((test) => (
                <tr key={test.name} className="border-b border-cream-dark/50">
                  <td className="py-3 pr-4 text-text-body">{test.name}</td>
                  <td className="py-3 pr-4 font-medium text-accent">{test.result}</td>
                  <td className="py-3 text-text-light">{test.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
