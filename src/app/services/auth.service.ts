import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AuthService {
  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
    localStorage.setItem("token", token);
  }

  getToken(): string | null {
    return this.token || localStorage.getItem("token");
  }

  logout() {
    this.token = null;
    localStorage.removeItem("token");
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
