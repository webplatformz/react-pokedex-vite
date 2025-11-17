class ProfileService {
  private name: string;
  private email: string;

  constructor() {
    this.name = "";
    this.email = "";
  }

  getProfile() {
    return { name: this.name, email: this.email };
  }

  setProfile(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

export const profileService = new ProfileService();
