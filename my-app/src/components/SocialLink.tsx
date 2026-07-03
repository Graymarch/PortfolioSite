import type { SocialItem } from './App';

export function SocialLink({ label, url }: SocialItem) {
  return (
    <li>
      <a className="social-link" href={url} target="_blank" rel="noreferrer">
        {label}
      </a>
    </li>
  );
}
