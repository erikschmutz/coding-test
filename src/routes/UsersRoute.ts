import { Router } from "express";
import UserRepository from "../repository/UserRepository";
import User from "../models/User";

const router = Router();

router.get("/:id", (req, res) =>
  res.json(UserRepository.get(Number.parseInt(req.params.id)))
);
router.post("/:id", (req, res) => res.json(UserRepository.create(req.body)));
router.put("/:id", (req, res) =>
  res.json(UserRepository.update(Number.parseInt(req.params.id), req.body))
);
router.delete("/:id", (req, res) =>
  res.json(UserRepository.delete(Number.parseInt(req.params.id)))
);

/**
 * 1. Implement a search functionality so that one can use query parameters
 * to fetch all users with a particular name.
 *
 * Examples:
 *
 * GET http://localhost:8080/users?name=Alice
 * Should return: [{"name": "Alice", "id": 2, "age": 43}, {"name": "Alice", "id": 5, "age": 53}]
 *
 *
 * GET http://localhost:8080/users?age=45
 * Should return: [{"name": "Bob", "id": 1, "age": 43}]
 *
 */

/**
 * 2. Extend the functionality to support multiple query paramaters based on an
 * 'AND' functionlity.
 *
 * Examples:
 *
 * GET http://localhost:8080/users?name=Alice&age=53
 * Should return: [{"id": 5, "name": "Alice", "age": 53}]
 *
 */

/**
 * 3. Implement a search functionality to get all the user which have an age greater
 * than a given value.
 *
 * Example:
 *
 * GET http://localhost:8080/users?age<=30
 * Should return [{"id": 1,"name": "Bob","age": 43},{"id": 3,"name": "Dennis","age": 32}]
 *
 */

router.get("/", (req, res) => {
  const users = UserRepository.list();
  res.json(users);
});

export default router;
