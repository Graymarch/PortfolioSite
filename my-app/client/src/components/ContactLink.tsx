export type ContactItem = {
  label: string
  url: string
}

export function ContactLink({ label, url }: ContactItem) {
  return (
    <li>
      <a className="contact-link" href={url} target="_blank" rel="noreferrer">
        {label}
      </a>
    </li>
  );
}
