export default function Form({ children, className }) {
  return <form className={className ? className : null}>{children}</form>;
}
