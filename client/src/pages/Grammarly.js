import React from "react";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

function Grammarly() {
    return (
			<div>
				<GrammarlyEditorPlugin clientId="client_HAu1KXGxCtTHJbSCr3wPXp">
					<textarea />
				</GrammarlyEditorPlugin>
			</div>
		);
}

export default Grammarly;