# ORACLE PRIME

Autonomous market-intelligence, quantitative research, risk and execution platform.

## Architecture

- 14-phase integrated monorepo
- 832 deterministic feature definitions across 16 feature families
- 52 model families with uncertainty, calibration and abstention primitives
- Market normalization and deterministic replay
- Risk-first order evaluation and idempotent execution
- Event-driven backtesting and portfolio analytics foundation
- Hash-chained audit ledger and reproducibility hashes
- AI Copilot API boundary
- Observability and tenant/business primitives
- Next.js operator dashboard

## Safety posture

The default execution venue is PAPER. Live brokerage/exchange credentials, production secrets, and real-money execution are intentionally not embedded in source code. Before enabling live execution, add authenticated venue adapters, secret management, independent risk controls, reconciliation, and human approval gates.

## Development

`pnpm install && pnpm build && pnpm test`

The environment used to generate this workspace may not have registry access; run the commands in a normal Node 22 environment with pnpm 9.