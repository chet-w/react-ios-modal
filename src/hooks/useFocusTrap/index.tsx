import React, { useCallback, useEffect } from "react";
import { useKeyBinding } from "..";

const useFocusTrap = (
  elementRef: React.MutableRefObject<null | HTMLElement>
) => {
  const FOCUSABLE_SELECTORS =
    'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])';

  const getKeyboardFocusableElements = (
    element: Document | HTMLElement | null = document
  ): HTMLElement[] => {
    return Array.from(
      (element || document).querySelectorAll(FOCUSABLE_SELECTORS)
    ).filter((el) => !el.hasAttribute("disabled")) as HTMLElement[];
  };

  useKeyBinding("Tab", (event) => {
    let focusableElementsInComponent = getKeyboardFocusableElements(
      elementRef.current
    );
    if (!focusableElementsInComponent.length) {
      event.preventDefault();
      return;
    }

    const firstFocusableElement = focusableElementsInComponent[0];
    const lastFocusableElement =
      focusableElementsInComponent[focusableElementsInComponent.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        event.preventDefault();
      }
    }
  });

  const focusHeader = useCallback((): void => {
    if (elementRef.current) {
      const target = elementRef.current;
      const targetLabel = target.getAttribute("aria-labelledby");
      if (targetLabel) {
        (elementRef.current.querySelector(
          `#${targetLabel}`
        ) as HTMLElement).focus();
      }
    }
  }, [elementRef]);

  useEffect(() => {
    focusHeader();
  }, [elementRef, focusHeader]);
};

export default useFocusTrap;
