type Subjects = {
  subjects: string[];
  label: string;
};

const TeachingSubjects = ({ subjects, label }: Subjects) => {
  return (
    <div className="mt-2 text-sm">
      <label htmlFor="teachingSubjects" className="font-bold text-sm">
        {label}
      </label>
      <div className="overflow-x-scroll ">
        <table>
          <tr>
            <th className="px-3 py-1 text-center"></th>
            {subjects.map((subject, index) => {
              return (
                <th key={index} className="px-3 py-1 text-center">
                  {subject}
                </th>
              );
            })}
          </tr>
          <tr>
            <td className="px-1 py-2 text-center">First Choice</td>
            {subjects.map((subject, index) => {
              return (
                <td key={index} className="px-3 py-1 text-center">
                  <input
                    type="radio"
                    name={`secondChoice_${index}`}
                    value={subject}
                  />
                </td>
              );
            })}
          </tr>
          <tr>
            <td className="px-1 py-2 text-center">Second Choice</td>
            {subjects.map((subject, index) => {
              return (
                <td key={index} className="px-3 py-1 text-center">
                  <input
                    type="radio"
                    name={`secondChoice_${index}`}
                    value={subject}
                  />
                </td>
              );
            })}
          </tr>
        </table>
      </div>
    </div>
  );
};

export default TeachingSubjects;
