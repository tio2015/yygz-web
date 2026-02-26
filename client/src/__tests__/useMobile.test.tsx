/**
 * 单元测试 — useMobile hook
 */
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useMobile } from "../hooks/useMobile";

describe("useMobile hook", () => {
  const setWindowWidth = (width: number) => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: width,
    });
  };

  beforeEach(() => {
    vi.stubGlobal("matchMedia", (query: string) => ({
      matches: window.innerWidth < 768,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("宽度 375px 时返回 true（手机）", () => {
    setWindowWidth(375);
    const { result } = renderHook(() => useMobile());
    expect(result.current).toBe(true);
  });

  it("宽度 1280px 时返回 false（桌面）", () => {
    setWindowWidth(1280);
    vi.stubGlobal("matchMedia", (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    const { result } = renderHook(() => useMobile());
    expect(result.current).toBe(false);
  });
});
