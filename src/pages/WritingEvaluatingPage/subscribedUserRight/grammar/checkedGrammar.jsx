import React, { useState, useEffect } from "react";
import { diff_match_patch as DiffMatchPatch } from "diff-match-patch";

const DiffComponent = ({ oldText, newText }) => {
	const [diffText, setDiffText] = useState("");

	useEffect(() => {
		const dmp = new DiffMatchPatch();
		const diff = dmp.diff_main(oldText, newText);
		// console.log("diffs:", diff);
		dmp.diff_cleanupSemantic(diff);
		const diffHtml = dmp.diff_prettyHtml(diff);
		setDiffText(diffHtml);
	}, [oldText, newText]);

	return <div dangerouslySetInnerHTML={{ __html: diffText }}></div>;
};

const CheckedGrammar = ({ text, checkedText }) => {
	return (
		<div>
			<DiffComponent oldText={text} newText={checkedText} />
		</div>
	);
};

export default CheckedGrammar;
