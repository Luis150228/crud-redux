export const AvatarImg = ({ username }: { username: string }) => {
    return (
        <img
            src={`https://unavatar.io/youtube/${username}`}
            alt={`@${username}`}
            className="avatar-img"
        />
    )
}