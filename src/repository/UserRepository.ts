import * as fs from "fs";
import User from "../models/User";

const DATA_PATH = "./DATA.json";

class UserRepository {
  /**
   * Utility function which reads data
   */
  private static readData(): User[] {
    if (!fs.existsSync(DATA_PATH)) return [];
    const data = fs.readFileSync(DATA_PATH, "utf-8");
    return JSON.parse(data);
  }

  /**
   * Utility function which reads data
   */
  private static writeData(data: User[]) {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data));
    return data;
  }

  /**
   * Gets the the
   * @param id
   */
  static get(id: number): User | null {
    const user = this.readData().find((user) => user.id === id);
    return user ?? null;
  }

  /**
   *
   * @returns A list of all the users in the system
   */
  static list(): User[] {
    return this.readData();
  }

  static update(id: number, newUser: User): void {
    this.writeData([
      ...this.readData().map((user) => (user.id === id ? newUser : user)),
    ]);
  }

  static delete(id: number): void {
    this.writeData([...this.readData().filter((user) => user.id === id)]);
  }

  static create(user: User): void {
    this.writeData([...this.readData(), user]);
  }

  static reset() {}
}

export default UserRepository;
