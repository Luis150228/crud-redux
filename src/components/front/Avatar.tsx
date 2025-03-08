import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarDemo({ username }: { username: string }) {
  return (
    <Avatar className="avatar-img">
      <AvatarImage className="avatar-img" src={`https://unavatar.io/youtube/${username}`} alt={`@${username}`} />
      <AvatarFallback>RD</AvatarFallback>
    </Avatar>
  )
}
