export const formBio = (bio: string) => {
  if (!bio) {
    return "...";
  }
  if (bio && bio.length <= 40) {
    return bio;
  }
  return `${bio.slice(0, 40)} ...`;
};
