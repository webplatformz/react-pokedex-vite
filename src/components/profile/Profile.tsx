import { useRef } from "react";
import { useWindowPaste } from "./useWindowPaste";

type Props = { name: string; email: string };

export function Profile({ name, email }: Props) {
  const nameRef = useRef<HTMLInputElement>(null);

  useWindowPaste((value) => {
    if (nameRef.current) {
      nameRef.current.value = `Dr. ${value}`;
    }
  });

  return (
    <form method="post">
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Dr. React"
          defaultValue={name}
          ref={nameRef}
        />
      </div>
      <div>
        <label htmlFor="email">E-Mail: </label>
        <input
          type="text"
          placeholder="react@zuhlke.com"
          id="email"
          name="email"
          defaultValue={email}
        />
      </div>
      <input type="submit" value="save" />
    </form>
  );
}
