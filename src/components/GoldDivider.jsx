import { COLORS } from "../constants/theme";

export default function GoldDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "0 auto", width: "fit-content" }}>
      <div style={{ width: "40px", height: "1px", background: COLORS.matteGold, opacity: 0.6 }} />
      <div style={{ width: "6px", height: "6px", background: COLORS.matteGold, transform: "rotate(45deg)", opacity: 0.8 }} />
      <div style={{ width: "40px", height: "1px", background: COLORS.matteGold, opacity: 0.6 }} />
    </div>
  );
}
