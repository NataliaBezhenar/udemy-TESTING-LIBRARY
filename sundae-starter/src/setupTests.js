import "@testing-library/jest-dom";

import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/server";

// setup API mocking before all tests
beforeAll(() => server.listen());

// reset any request handlers that may be added during the tests, so they don't affect other tests
afterEach(() => server.resetHandlers());

// clean up after the tests are finished
afterAll(() => server.close());
