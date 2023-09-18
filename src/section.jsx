import Input from "./input";
import Form from "./form";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

function formatDate(date) {
  return format(parseISO(date), "LLLL yyyy");
}

function Date({ date }) {
  return date === "" || date === null ? null : formatDate(date);
}

function General({ onChange, values }) {
  return (
    <Form>
      <Input
        type="text"
        name="name"
        label="Name"
        value={values.name}
        onChange={onChange}
      ></Input>
      <Input
        type="text"
        name="email"
        label="Email"
        value={values.email}
        onChange={onChange}
      ></Input>
      <Input
        type="text"
        name="phone"
        label="Phone-number"
        value={values.phone}
        onChange={onChange}
      ></Input>
    </Form>
  );
}

function Education({ onChange, values }) {
  return (
    <Form>
      <Input
        type="text"
        name="school"
        label="School"
        value={values.school}
        onChange={onChange}
      ></Input>
      <Input
        type="text"
        name="location"
        label="Location"
        value={values.location}
        onChange={onChange}
      ></Input>
      <Input
        type="text"
        name="tos"
        label="Title of Study"
        value={values.tos}
        onChange={onChange}
      ></Input>
      <Input
        type="date"
        name="dos"
        label="Date started"
        value={values.dos}
        onChange={onChange}
      ></Input>
    </Form>
  );
}

function Experience({
  values,
  onChange,
  remove,
  addResponsibility,
  handleResponsibilites,
}) {
  return values.map((exp, index) => {
    return (
      <Form className="experience-form" key={exp.id}>
        <Input
          type="text"
          name="company"
          label="Company"
          value={exp.company}
          onChange={(e) => onChange(e, index)}
        ></Input>
        <Input
          type="text"
          name="position"
          label="Position title"
          value={exp.position}
          onChange={(e) => onChange(e, index)}
        ></Input>
        <Input
          type="text"
          name="location"
          label="Location"
          value={exp.location}
          onChange={(e) => onChange(e, index)}
        ></Input>
        <Input
          type="date"
          name="dateStarted"
          label="Date started"
          value={exp.dateStarted}
          onChange={(e) => onChange(e, index)}
        ></Input>
        <Input
          type="date"
          name="dateEnded"
          label="Date ended"
          value={exp.dateEnded}
          onChange={(e) => onChange(e, index)}
        ></Input>
        {exp.responsibilities.map((responsibility, index) => {
          return (
            <Input
              key={responsibility.id}
              type="next"
              name="responsibilities"
              label="Responsibility"
              value={responsibility.value}
              onChange={(e) =>
                handleResponsibilites(e, index, responsibility.id, exp.id)
              }
            ></Input>
          );
        })}
        <button
          onClick={(e) => {
            e.preventDefault();
            addResponsibility(e, index);
          }}
        >
          Add Responsibility
        </button>
        <button className="remove-experience" onClick={() => remove(index)}>
          Remove exerience
        </button>
      </Form>
    );
  });
}

function PersonalDisplay({ values }) {
  return (
    <section key={values.id}>
      <h2>{values.name}</h2>
      <p>{values.email}</p>
      <p>{values.phone}</p>
    </section>
  );
}

function EducationDisplay({ values }) {
  return (
    <div key={values.id} className="education">
      <h3>Education</h3>
      <hr></hr>
      <section key={values.id} className="education-content">
        <div className="top-ed">
          <strong>
            <p>{values.school}</p>
          </strong>
          <em>
            <p>{values.tos}</p>
          </em>
        </div>
        <div className="bottom-ed">
          <strong>
            <p>{values.location}</p>
          </strong>
          <em>
            <p>
              <Date date={values.dos}></Date>
            </p>
          </em>
        </div>
      </section>
    </div>
  );
}

function ExperienceDisplay({ values }) {
  return values.map((value) => {
    return (
      <section className="experience-detail" key={value.id}>
        <div className="titles-exp">
          <div className="top-exp">
            <strong>
              <p>{value.company}</p>
            </strong>
            <p>{value.position}</p>
          </div>
          <div className="bottom-exp">
            <em>
              <p>{value.location}</p>
            </em>
            <p>
              <Date date={value.dateStarted}></Date>
              {" - "}
              <Date date={value.dateEnded}></Date>
            </p>
          </div>
        </div>
        <ul className="response-list">
          {value.responsibilities.map((response) => (
            <li key={response.id}>{response.value}</li>
          ))}
        </ul>
        <br></br>
      </section>
    );
  });
}

export {
  Education,
  General,
  Experience,
  EducationDisplay,
  PersonalDisplay,
  ExperienceDisplay,
};
