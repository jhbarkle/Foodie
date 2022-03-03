export interface UserProfile {
  userName: string;
  email: string;
  bioDescription: string;
  fridgeList: string[];
  phoneNumber: string;
  savedRecipes: Recipe[];
  profilePic: string;
}

export interface Recipe {
  name: string;
  url: string;
  description: string;
  dietLabels: string[];
}
