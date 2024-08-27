'use client';

import { Button } from '../button';

export function ExitDraftButton() {
  const handleExitDraft = async () => {
    try {
      // Call the API to disable draft mode
      const response = await fetch('/api/disableDraft');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);

      // If the draft mode is disabled successfully, reload the page
      if (data) {
        window.location.reload();
      }
    } catch (error) {
      console.error('Failed to disable draft mode:', error);
    }
  };

  return (
    <Button title="Exit draft mode" onClick={handleExitDraft}>
      Exit
    </Button>
  );
}

export default ExitDraftButton;
